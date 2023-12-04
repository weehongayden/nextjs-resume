import { resume } from "@/app/data/resume";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 15,
    borderBottom: "1px solid black",
  },
  title: {
    fontSize: 20,
    fontFamily: "Open Sans",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Open Sans",
  },
  paragraph: {
    fontSize: 12,
    fontFamily: "Open Sans",
  },
});

export const Header = () => {
  const { detail } = resume;
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{detail.name}</Text>
      <Text style={styles.subtitle}>{detail.role}</Text>
      <Text style={styles.paragraph}>
        {detail.nationality} | {detail.email} | {detail.phone}
      </Text>
    </View>
  );
};
