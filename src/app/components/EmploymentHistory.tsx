import { resume } from "@/app/data/resume";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
  },
  twoColumn: {
    display: "flex",
    flexDirection: "row",
  },
  rowHistory: {
    display: "flex",
    paddingBottom: 20,
  },
  columnTitle: {
    flex: "1 1 200px",
  },
  columnDescription: {
    flex: "1 1 100%",
  },
  heading: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "IBM Plex Mono",
    textTransform: "uppercase",
    paddingTop: 10,
    paddingBottom: 10,
  },
  subheading: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "IBM Plex Mono",
    textTransform: "uppercase",
    paddingTop: 10,
    paddingBottom: 10,
  },
  list: {
    marginLeft: 8,
    marginRight: 8,
  },
  description: {
    display: "flex",
    flexDirection: "row",
  },
  paragraph: {
    display: "flex",
    fontSize: 14,
    fontFamily: "IBM Plex Mono",
    textAlign: "justify",
  },
  sidenote: {
    display: "flex",
    fontSize: 12,
    fontFamily: "IBM Plex Mono",
    textAlign: "justify",
  },
});

export const EmploymentHistory = () => {
  const { employmentHistory } = resume;
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.heading}>Employment History</Text>
      </View>
      {employmentHistory.map((history) => (
        <View style={styles.rowHistory}>
          <View style={styles.twoColumn}>
            <View style={styles.columnTitle}>
              <Text style={styles.subheading}>{history.name}</Text>
              <Text style={styles.sidenote}>{history.country}</Text>
              <Text style={styles.sidenote}>{history.role}</Text>
              <Text style={styles.sidenote}>{history.duration}</Text>
            </View>
            <View style={styles.columnDescription}>
              {history.jobDescription.map((description) => (
                <View style={styles.description}>
                  <Text style={styles.list}>{`\u2022`}</Text>
                  <Text style={styles.paragraph}>{description}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </>
  );
};
