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
    fontSize: 24,
    fontFamily: "IBM Plex Mono",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "IBM Plex Mono",
  },
  paragraph: {
    fontSize: 14,
    fontFamily: "IBM Plex Mono",
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
