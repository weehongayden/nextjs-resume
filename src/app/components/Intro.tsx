import { resume } from "@/app/data/resume";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: "1px solid black",
  },
  paragraph: {
    fontSize: 12,
    fontFamily: "Open Sans",
    textAlign: "justify",
  },
});

export const Intro = () => {
  const { intro } = resume;
  return (
    <View style={styles.header}>
      <Text style={styles.paragraph}>{intro}</Text>
    </View>
  );
};
