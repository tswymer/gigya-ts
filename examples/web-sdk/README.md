# @gigya-ts/web-sdk - Example Project

An example project showing how to use the Gigya WebSDK with [@gigya-ts/web-sdk](/packages/web-sdk/README.md).

> The code in this example uses the API Key from the offical [Gigya Demo Website](https://gigyademo.com/) for demonstration purposes. The example calls the [accounts.getSchema](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135d4e170b21014bbc5a10ce4041860.html) API method and prints the resulting schema JSONs to the page. This only works on `localhost` or a domain that is registered with the API Key.

## Example

![alt text](/docs/images/web-sdk-example-screenshot.png)

## Running the example

1. Clone the repository:

```bash
git clone https://github.com/tswymer/gigya-ts.git
```

2. Navigate to the repository and install dependencies:

```bash
cd gigya-ts && pnpm install
```

3. (Optional) Update the Gigya API Key in `src/index.html` for your own site:

```html
<script
    type="text/javascript"
    lang="javascript"
    src="https://cdns.gigya.com/JS/gigya.js?apikey=<YOUR_API_KEY_HERE>"
></script>
```

4. Navigate to the example project and start the development server:

```bash
cd examples/web-sdk && pnpm dev
```

5. Open your browser and navigate to `http://localhost:8080`.
