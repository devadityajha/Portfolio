// src/components/sections/ResumePDF.jsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
  },
  header: {
    backgroundColor: "#0D9488",
    color: "white",
    padding: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    opacity: 0.9,
  },
  section: {
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0D9488",
    borderBottomWidth: 1,
    borderBottomColor: "#0D9488",
    paddingBottom: 3,
  },
  item: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: "#0D9488",
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  degree: {
    fontSize: 14,
    fontWeight: "bold",
  },
  institution: {
    fontSize: 12,
    color: "#0D9488",
  },
  year: {
    fontSize: 12,
    color: "#666666",
  },
  description: {
    fontSize: 11,
    color: "#333333",
    marginTop: 3,
  },
  skillsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  skillGroup: {
    width: "30%",
    backgroundColor: "#F0FDF4",
    padding: 8,
    borderRadius: 4,
  },
  skillCategory: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0D9488",
    marginBottom: 5,
  },
  skillItem: {
    fontSize: 10,
    marginBottom: 3,
  },
});

// Create Document Component
const ResumePDF = ({ education, certifications, skills, language }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Aditya Sharma</Text>
        <Text style={styles.title}>
          {language === "en"
            ? "Senior Full Stack Developer"
            : "सीनियर फुल स्टैक डेवलपर"}
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          {language === "en" ? "Education" : "शिक्षा"}
        </Text>
        {education.map((edu) => (
          <View key={edu.id} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.year}>{edu.year}</Text>
            </View>
            <Text style={styles.institution}>{edu.institution}</Text>
            <Text style={styles.description}>{edu.description}</Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          {language === "en" ? "Certifications" : "प्रमाणपत्र"}
        </Text>
        {certifications.map((cert) => (
          <View key={cert.id} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.degree}>{cert.name}</Text>
              <Text style={styles.year}>{cert.year}</Text>
            </View>
            <Text style={styles.institution}>{cert.issuer}</Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          {language === "en" ? "Skills" : "कौशल"}
        </Text>
        <View style={styles.skillsContainer}>
          {skills.map((skillGroup) => (
            <View key={skillGroup.category} style={styles.skillGroup}>
              <Text style={styles.skillCategory}>{skillGroup.category}</Text>
              {skillGroup.items.map((skill) => (
                <Text key={skill} style={styles.skillItem}>
                  • {skill}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
