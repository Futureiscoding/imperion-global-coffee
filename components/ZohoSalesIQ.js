import { useEffect } from "react";

const widgetScript =
  "https://salesiq.zoho.com/widget?wc=siqb4697e5dcc4d7b45f437a94d03c6791e5a98487d4856812d105a40bc6aebd27ad8be645c3bed34a82bf7cad8a36d6764";

export default function ZohoSalesIQ() {
  useEffect(() => {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      ready() {},
    };

    if (document.getElementById("zsiqscript")) return;

    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src = widgetScript;
    script.defer = true;
    script.onerror = () => {
      console.error("Zoho SalesIQ widget failed to load.");
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
