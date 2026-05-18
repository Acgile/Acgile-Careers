import { gql, getWpApolloClient } from "./graphql";

export const getSlug = (text, maxLength = 60) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD") // Normalize to decomposed form for handling accents
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\-\s]+/g, "") // Remove invalid chars
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/^-+/, "") // Trim hyphens from start
    .replace(/-+$/, "") // Trim hyphens from end
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .substring(0, maxLength); // Trim to max length
};

export const slugToTitle = (slug) =>
  slug
    .split("-")
    .filter((item) => item.length > 0)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

export const validatePhone = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const getJobData = async () => {
  const wpApolloClient = getWpApolloClient();
  try {
    const { data } = await wpApolloClient.query({
      query: gql`
        query Jobs {
          jobs(where: { status: PUBLISH }, first: 100) {
            nodes {
              fields {
                salaryRange {
                  endingSalary
                  startingSalary
                }
                department
                description
                employmentType
                location
                additionalDetails {
                  aboutThisRole
                  applicationDeadline
                  goodToHave
                  qualifications
                  responsibilities
                  whatWeOffer
                }
                isActive
              }
              title(format: RENDERED)
              databaseId
              date
              id
            }
          }
        }
      `,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          cache: "no-store",
        },
      },
    });
    return data;
  } catch (error) {
    console.error("GraphQL query error:", error);
    console.error(
      "Error details:",
      error.networkError ? error.networkError.result : error
    );
    return null;
  }
};


export const getSingleJob = async (id) => {
  const wpApolloClient = getWpApolloClient();
  try {
    const { data } = await wpApolloClient.query({
      query: gql`
        query SingleJob($id: ID!) {
          job(id: $id) {
            title(format: RENDERED)
            date
            fields {
              department
              description
              employmentType
              location
              salaryRange {
                endingSalary
                startingSalary
              }
              additionalDetails {
                aboutThisRole
                applicationDeadline
                goodToHave
                qualifications
                responsibilities
                whatWeOffer
              }
            }
          }
        }
      `,
      variables: { id },
      fetchPolicy: "network-only",
    });
    return data;
  } catch (error) {
    console.error("GraphQL query error:", error);
    if (error.networkError && error.networkError.result) {
      console.error("Network error details:", error.networkError.result);
    }
    if (error.graphQLErrors) {
      console.error("GraphQL errors:", error.graphQLErrors);
    }
    throw error; // Re-throw the error to be handled by the caller
  }
};
