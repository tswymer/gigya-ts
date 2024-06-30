# @gigya-ts - Type-Safe Gigya / SAP Customer Data Cloud

SAP Customer Data Cloud, formally known as Gigya, does not provide official TypeScript definitions. This project adds those missing definitions to your SAP Customer Data Cloud implementation, providing type-safety and code completion in your IDE.

As the SAP Customer Data Cloud APIs still use the `gigya` namespace, this project also adopts that name. This project is fully compatible with SAP Customer Data Cloud.

> This is an unofficial project and is not supported by SAP or any other party. Use at your own risk.

# Motivation

-   Add strong typing your SAP Customer Data Cloud projects, including support for your own custom schemas (data, preferences, subscriptions).
-   Expose a slim, promise-based client to interface with the Gigya REST API, supporting both Node.js and the browser ([@gigya-ts/gigya](packages/gigya/README.md)).
-   Add type-safety to projects using the Gigya Web SDK ([@gigya-ts/web-sdk](packages/web-sdk/README.md)).
-   Share the same type definitions across all packages, ensuring full-stack consistency.
-   Tiny bundle sizes, almost everything is just type definitions ([@gigya-ts/rest-api](packages/rest-api/README.md)).
-   No external dependencies.

# Repository Structure

This repository contains multiple related projects, each of which provide their own features and documentation. Please refer to each of the projects for more information on installation and usage:

## [@gigya-ts/gigya](packages/gigya/README.md)

A tiny type-safe wrapper around the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html) for Node.js and the browser.

## [@gigya-ts/web-sdk](packages/web-sdk/README.md)

Adds type-safety to [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html) projects.

## [@gigya-ts/rest-api](packages/rest-api/README.md)

Type definitions for the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html), providing the base definitions for all other packages in this repository. You probably don't need to use this package yourself.
