import { EmploymentHistory } from "@/app/components/EmploymentHistory";
import { Header } from "@/app/components/Header";
import { Intro } from "@/app/components/Intro";
import { Document, Font, Page } from "@react-pdf/renderer";

Font.register({
  family: "IBM Plex Mono",
  src: "https://fonts.gstatic.com/s/ibmplexmono/v19/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2",
});

export default function Home() {
  return (
    <Document
      title="Resume"
      author="WeeHong"
      subject="WeeHong's Resume"
      language="en"
    >
      <Page size="A4">
        <Header />
        <Intro />
        <EmploymentHistory />
      </Page>
    </Document>
  );
}
