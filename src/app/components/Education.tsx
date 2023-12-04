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
    flexDirection: "column",
    flex: "1 0 100%",
  },
  row: {
    display: "flex",
  },
  columnTitle: {
    flex: "1 1 200px",
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
    fontSize: 12,
    fontFamily: "Open Sans",
    textAlign: "justify",
  },
});

export const Education = () => {
  const { skills } = resume;
  return (
    <View style={styles.section}>
      <View style={styles.title}>
        <Text style={styles.heading}>Skill, Framework and Technology</Text>
      </View>
      <View
        style={{
          display: "flex",
        }}
      >
        <View style={styles.twoColumn}>
          {Object.entries(skills).map(([key, value]) => (
            <View style={styles.row}>
              <View style={styles.columnTitle}>
                <Text style={styles.subheading}>{key}</Text>
              </View>
              <View style={styles.columnDescription}>
                <Text style={styles.paragraph}>{value.join(", ")}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
