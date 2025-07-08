import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useReportWebVitals } from "next/web-vitals";

export default function App({ Component, pageProps }: AppProps) {
  useReportWebVitals((metric) => {
    if (metric.name === "TTFB") {
      console.log("TTFB = ", metric.value);
    }
  });

  return <Component {...pageProps} />;
}
