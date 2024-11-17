# @gigya-ts - Type-Safe Gigya / SAP Customer Data Cloud

SAP Customer Data Cloud, formally known as Gigya, does not provide official TypeScript type definitions. This project aims to adds those missing definitions to your SAP Customer Data Cloud implementation, providing type-safety and code completion in your IDE for both the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html) and [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html).

As the SAP Customer Data Cloud APIs still use the `gigya` namespace, this project also adopts that name. This project is fully compatible with SAP Customer Data Cloud.

> This is an unofficial project and is not supported by SAP nor any other party. Use at your own risk.

# Motivation

-   Add strong typings SAP Customer Data Cloud projects, including support for custom schemas (data, preferences, subscriptions).
-   Expose a minimal, promise-based client to interface with the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html), supporting both Node.js and the browser (see [@gigya-ts/gigya](packages/gigya/README.md)).
-   Add type-safety to projects using the [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html) (see [@gigya-ts/web-sdk](packages/web-sdk/README.md)) in the browser.
-   Share the same type definitions across all packages, ensuring full-stack consistency.
-   Tiny bundle sizes, almost everything is just type definitions (see [@gigya-ts/rest-api](packages/rest-api/README.md)).
-   No external dependencies.

# Repository Structure

This repository contains multiple related projects, each of which provide their own features and documentation. Please refer to each of the projects for more information on installation and usage:

## [@gigya-ts/gigya](packages/gigya/README.md)

A minimal type-safe client for interacting with the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html), for browsers and Node.js.

## [@gigya-ts/web-sdk](packages/web-sdk/README.md)

Adds type-safety to [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html) projects in the browser.

## [@gigya-ts/rest-api](packages/rest-api/README.md)

Type definitions for the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html), providing the base type definitions for all other packages in this repository. You probably don't need to use this package yourself in your project.
