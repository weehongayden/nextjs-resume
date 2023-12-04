import { resume } from "@/app/data/resume";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid black",
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    display: "flex",
    paddingBottom: 5,
  },
  twoColumn: {
    display: "flex",
    flexDirection: "row",
    flex: "1 0 100%",
  },
  rowHistory: {
    display: "flex",
    paddingBottom: 10,
  },
  columnTitle: {
    flex: "1 1 200px",
    display: "flex",
    flexDirection: "column",
  },
  columnDescription: {
    flex: "1 1 100%",
  },
  heading: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Open Sans",
    textTransform: "uppercase",
  },
  subheading: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Open Sans",
    textTransform: "uppercase",
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
    fontSize: 12,
    fontFamily: "Open Sans",
    textAlign: "justify",
  },
  sidenote: {
    fontSize: 10,
    fontFamily: "Open Sans",
    textAlign: "justify",
  },
});

export const EmploymentHistory = () => {
  const { employmentHistory } = resume;
  return (
    <View style={styles.section}>
      <View style={styles.title}>
        <Text style={styles.heading}>Employment History</Text>
      </View>
      {employmentHistory.map((history, i) => (
        <View
          style={{
            display: "flex",
            paddingBottom: i === employmentHistory.length - 1 ? 0 : 10,
          }}
        >
          <View style={styles.twoColumn}>
            <View style={styles.columnTitle}>
              <Text style={styles.subheading}>{history.name}</Text>
              <Text style={styles.sidenote}>{history.country}</Text>
              <Text style={styles.sidenote}>{history.role}</Text>
              <Text style={styles.sidenote}>{history.duration}</Text>
            </View>
            <View style={styles.columnDescription}>
              {history.jobDescription.map((description, i) => (
                <View style={styles.description}>
                  <Text style={styles.list}>{`\u2022`}</Text>
                  <Text style={styles.paragraph}>{description}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
