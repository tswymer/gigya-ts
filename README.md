# gigya-ts

SAP Customer Data Cloud, formally known as Gigya, does not provide official TypeScript definitions. This project adds those missing definitions to your SAP Customer Data Cloud implementation.

As the SAP Customer Data Cloud APIs still use the `gigya` namespace, this project also adopts that name. This project is fully compatible with SAP Customer Data Cloud.

> This is an unofficial project and is not supported by SAP or any other party. Use at your own risk.

# Features

-   Adds strong typing your SAP Customer Data Cloud projects, including your custom schemas.
-   Exposes simple client to interface with the Gigya REST API, supporting both Node.js and the browser ([@gigya-ts/gigya](packages/gigya/README.md)).
-   Add type-safety to projects using the Gigya Web SDK ([@gigya-ts/web-sdk](packages/web-sdk/README.md)).
-   Shares the same type definitions across all packages, ensuring full-stack consistency.
-   Tiny package sizes, almost everything is just type definitions ([@gigya-ts/rest-api](packages/rest-api/README.md)).
-   No external dependencies.

# Project Structure

This project is split into sub-projects, each of which provide their own features and documentation. Please refer to each of the sub-projects for more information on installation and usage:

-   [@gigya-ts/gigya](packages/gigya/README.md) - A tiny type-safe wrapper around the SAP Customer Data Cloud REST API for Node.js and the browser. Make REST API calls to Gigya.
-   [@gigya-ts/web-sdk](packages/web-sdk/README.md) - Type definitions for the [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html). Add type-safety to the Gigya Web SDK.

The [@gigya-ts/rest-api](packages/rest-api/README.md) package provides type definitions for the SAP Customer Data Cloud REST API. This is the base of all other packages, you probably don't need to use this package yourself.
