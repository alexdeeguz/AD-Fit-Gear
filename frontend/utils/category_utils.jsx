export const getCategories = () => (
    $.ajax({
        url: "/api/categories",
        method: "GET"
    })
)

export const getCategory = (id) => (
    $.ajax({
        url: `/api/categories/${id}`,
        method: "GET"
    })
)