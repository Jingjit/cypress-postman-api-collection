describe("Automation create and delete collection postman", () => {
    let collectionUid

    it("Create collection and delete collection", function () {
        cy.createCollection().then((collectionUid) => cy.deleteCollection(collectionUid))
    })
})