Cypress.Commands.add("createCollection", () => {
    const postmanUrl = Cypress.env("postmanUrl")
    const postmanApiKey = Cypress.env("postmanApiKey")
    const workspaceId = Cypress.env("workspaceId")

    cy.request({
        url: `${postmanUrl}/collections`,
        method: 'POST',
        qs: {
            workspaceId: `${workspaceId}`
        },
        headers: {
            "X-Api-Key": `${postmanApiKey}`
        },
        body: {
            "collection": {
                "info": {
                    "name": "Create Postman Collection",
                    "description": "For write an API automated test Create Postman Collection With Sample GET request successfully",
                    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
                },
                "item": [
                    {
                        "name": "Automate testing",
                        "item": [
                            {
                                "name": "Create Get all collections",
                                "event": [
                                    {
                                        "listen": "test",
                                        "script": {
                                            "exec": [
                                                ""
                                            ],
                                            "type": "text/javascript"
                                        }
                                    }
                                ],
                                "request": {
                                    "method": "GET",
                                    "header": [],
                                    "url": {
                                        "raw": "https://api.getpostman.com/collections",
                                        "protocol": "https",
                                        "host": [
                                            "api",
                                            "getpostman",
                                            "com"
                                        ],
                                        "path": [
                                            "collections"
                                        ],
                                        "query": [
                                            {
                                                "key": "workspace",
                                                "value": `${workspaceId}`,
                                                "description": "Optional. A workspace ID.",
                                                "disabled": true
                                            }
                                        ]
                                    },
                                    "description": "Gets all of your [collections](https://www.getpostman.com/docs/collections). The response includes all of your subscribed collections."
                                },
                                "response": [
                                    {
                                        "name": "Successful Response",
                                        "originalRequest": {
                                            "method": "GET",
                                            "header": [],
                                            "url": {
                                                "raw": "https://api.getpostman.com/collections",
                                                "protocol": "https",
                                                "host": [
                                                    "api",
                                                    "getpostman",
                                                    "com"
                                                ],
                                                "path": [
                                                    "collections"
                                                ],
                                                "query": [
                                                    {
                                                        "key": "workspace",
                                                        "value": "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
                                                        "description": "Optional. A workspace ID.",
                                                        "disabled": true
                                                    }
                                                ]
                                            }
                                        },
                                        "status": "OK",
                                        "code": 200,
                                        "_postman_previewlanguage": "json",
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json",
                                                "description": {
                                                    "content": "",
                                                    "type": "text/plain"
                                                }
                                            }
                                        ],
                                        "cookie": [],
                                        "body": "{\n    \"collections\": [\n        {\n            \"id\": \"dac5eac9-148d-a32e-b76b-3edee9da28f7\",\n            \"name\": \"Cloud API\",\n            \"owner\": \"12345678\",\n            \"createdAt\": \"2022-04-12T10:29:46.000Z\",\n            \"updatedAt\": \"2022-04-12T10:29:56.000Z\",\n            \"uid\": \"12345678-dac5eac9-148d-a32e-b76b-3edee9da28f7\",\n            \"isPublic\": true\n        },\n        {\n            \"id\": \"12ece9e1-2abf-4edc-8e34-de66e74114d2\",\n            \"name\": \"Test Collection\",\n            \"owner\": \"12345678\",\n            \"createdAt\": \"2022-01-13T10:21:46.000Z\",\n            \"updatedAt\": \"2022-02-12T11:29:56.000Z\",\n            \"uid\": \"12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2\",\n            \"isPublic\": false,\n            \"fork\": {\n                \"label\": \"Test Fork\",\n                \"createdAt\": \"2022-06-16T19:51:44.069Z\",\n                \"from\": \"12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2\"\n            }\n        },\n        {\n            \"id\": \"f695cab7-6878-eb55-7943-ad88e1ccfd65\",\n            \"name\": \"Postman Echo\",\n            \"owner\": \"12345678\",\n            \"createdAt\": \"2021-04-11T09:18:26.000Z\",\n            \"updatedAt\": \"2022-05-01T15:29:32.000Z\",\n            \"uid\": \"12345678-f695cab7-6878-eb55-7943-ad88e1ccfd65\",\n            \"isPublic\": true\n        }\n    ]\n}"
                                    },
                                    {
                                        "name": "Filter by Workspace",
                                        "originalRequest": {
                                            "method": "GET",
                                            "header": [],
                                            "url": {
                                                "raw": "https://api.getpostman.com/collections?workspace=1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
                                                "protocol": "https",
                                                "host": [
                                                    "api",
                                                    "getpostman",
                                                    "com"
                                                ],
                                                "path": [
                                                    "collections"
                                                ],
                                                "query": [
                                                    {
                                                        "key": "workspace",
                                                        "value": "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
                                                        "description": "Optional. A workspace ID."
                                                    }
                                                ]
                                            }
                                        },
                                        "status": "OK",
                                        "code": 200,
                                        "_postman_previewlanguage": "json",
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json",
                                                "description": {
                                                    "content": "",
                                                    "type": "text/plain"
                                                }
                                            }
                                        ],
                                        "cookie": [],
                                        "body": "{\n    \"collections\": [\n        {\n            \"id\": \"dac5eac9-148d-a32e-b76b-3edee9da28f7\",\n            \"name\": \"Cloud API\",\n            \"owner\": \"12345678\",\n            \"createdAt\": \"2022-04-12T10:29:46.000Z\",\n            \"updatedAt\": \"2022-04-12T10:29:56.000Z\",\n            \"uid\": \"12345678-dac5eac9-148d-a32e-b76b-3edee9da28f7\",\n            \"isPublic\": true\n        }\n    ]\n}"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.collection.name).to.eq("Create Postman Collection")

        return response.body.collection.id
    })
})