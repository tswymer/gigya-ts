# gigya-ts

SAP Customer Data Cloud, formally known as Gigya, does not provide official TypeScript definitions. This project adds those missing definitions to your SAP Customer Data Cloud implementation.

**This is an unofficial project and is not supported by SAP nor any other party. Use at your own risk.**

As the SAP Customer Data Cloud API still is still named `gigya`, this project also adopts that name. This project is however fully compatible with and built for SAP Customer Data Cloud.

# Features

This project is split into sub-projects, each of which provide their own features and documentation. Please refer to each of the sub-projects for more information on installation and usage.

-   [node-gigya](packages/node-gigya/README.md) - A tiny type-safe wrapper around the SAP Customer Data Cloud REST API for Node.js and the browser. Use this to make any REST API call to Gigya.
-   [gigya-web-sdk-types](packages/gigya-cms/README.md) - Type definitions for the [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html). Use this to add type-safety to the Gigya Web SDK on your website.
-   [gigya-rest-api-types](packages/gigya-rest-api-types/README.md) - Type definitions for the SAP Customer Data Cloud REST API. This is the base of all other packages, you probably don't need to use this package yourself.
