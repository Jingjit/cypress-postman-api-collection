Cypress.Commands.add("deleteCollection", (collectionUid) => {
    const postmanUrl = Cypress.env("postmanUrl")
    const postmanApiKey = Cypress.env("postmanApiKey")
    const xxx = collectionUid

    cy.request({
        url: `${postmanUrl}/collections/${xxx}`,
        method: 'DELETE',
        headers: {
            "X-Api-Key": `${postmanApiKey}`
        },
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.collection.id).to.eq(collectionUid)
    })
})