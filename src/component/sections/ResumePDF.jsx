// src/components/sections/ResumePDF.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Simple, clean styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.3,
    color: "#000",
  },

  // Header
  header: {
    textAlign: "center",
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 12,
    marginBottom: 6,
  },
  contact: {
    fontSize: 9,
    color: "#333",
  },

  // Sections
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "600",
    backgroundColor: "#f5f5f5",
    padding: 5,
    paddingLeft: 8,
    marginBottom: 6,
    textTransform: "uppercase",
    color: "#000",
    borderRadius: 3,
  },

  // Experience/Education Items
  item: {
    marginBottom: 6,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  itemTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },
  itemDate: {
    fontSize: 9,
    color: "#333",
  },
  itemSubtitle: {
    fontSize: 9,
    color: "#000",
    marginBottom: 2,
  },
  bullet: {
    fontSize: 9,
    marginLeft: 8,
    marginBottom: 1,
    color: "#000",
  },

  // Projects
  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 3,
  },
  projectDesc: {
    fontSize: 10,
    marginBottom: 8,
  },

  // Skills
  skillCategory: {
    fontSize: 10,
    marginBottom: 3,
    color: "#000",
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>ADITYA JHA</Text>
        <Text style={styles.jobTitle}>FULL STACK DEVELOPER</Text>
        <Text style={styles.contact}>
          Dwarka Sector -19 New Delhi | +91 7683053507 | jhaaditya2508@gmail.com
        </Text>
        <Text style={styles.contact}>LinkedIn | Github</Text>
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>

        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>
              Backend Developer at HCP Travels
            </Text>
            <Text style={styles.itemDate}>May 2025 - Current</Text>
          </View>
          <Text style={styles.bullet}>
            • Working on both frontend and backend of the HCP Travels website,
            including login system with JWT and APIs for tour and travel
            packages.
          </Text>
          <Text style={styles.bullet}>
            • Updating user interface and components using React.js and Tailwind
            CSS to improve overall experience and functionality.
          </Text>
        </View>

        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>
              Software Developer Intern Bringmark Pvt Ltd
            </Text>
            <Text style={styles.itemDate}>January 2025 - May 2025</Text>
          </View>
          <Text style={styles.bullet}>
            • Redesigned the company website with React.js and Tailwind CSS,
            improving UX, responsiveness, and performance.
          </Text>
          <Text style={styles.bullet}>
            • Developed backend for ParlourTime service using Node.js, handling
            bookings, API integration, and server logic.
          </Text>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <Text style={styles.projectTitle}>HCP Travels</Text>
        <Text style={styles.projectDesc}>
          A tour and travel booking platform with user authentication, dynamic
          tour package APIs, and admin features. Currently working on the
          Activities section to manage and display travel experiences. Built
          using React.js, Node.js, Express, MongoDB, and Tailwind CSS.
        </Text>

        <Text style={styles.projectTitle}>Bringmark</Text>
        <Text style={styles.projectDesc}>
          Redesigned the company's main website to give it a fresh and modern
          look. Improved layout, made it easier to use on mobile, and added
          clear sections to showcase services more effectively.
        </Text>

        <Text style={styles.projectTitle}>Real Estate</Text>
        <Text style={styles.projectDesc}>
          Developed a full-stack real estate platform using MERN stack with
          features to post flats for rent/sale, upload images, filter by price,
          parking, and furnishing. Integrated secure auth and deployed it on
          Render & Vercel for live access.
        </Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <Text style={styles.skillCategory}>
          • Frontend: Html, Css, Tailwind, Bootstrap, Vanilla Js, React Js,
          Redux Toolkit, Zustand, Framer Motion
        </Text>
        <Text style={styles.skillCategory}>
          • Backend: Node Js, Express, Mongo db, Firebase
        </Text>
        <Text style={styles.skillCategory}>
          • Tools & Platforms: Git, Github, Postman, Vercel, Vs Code
        </Text>
        <Text style={styles.skillCategory}>
          • Operating System: Window, Linux
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>

        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>MERN STACK DEVELOPMENT</Text>
            <Text style={styles.itemDate}>March 2024 to March 2025</Text>
          </View>
          <Text style={styles.itemSubtitle}>
            DICE ACADEMY, HAUZKHAS NEW DELHI
          </Text>
        </View>

        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>
              Bachelor of Technology in Biomedical Engineering
            </Text>
            <Text style={styles.itemDate}>Aug 2020 to June 2023</Text>
          </View>
          <Text style={styles.itemSubtitle}>
            Deenbandhu Chhotu Ram University of Science and Technology, Haryana
          </Text>
        </View>

        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Diploma in Medical Electronics</Text>
            <Text style={styles.itemDate}>Aug 2016 to June 2019</Text>
          </View>
          <Text style={styles.itemSubtitle}>
            Chhotu Ram Rural Institute of Technology (CRRIT), Kanjhawala, Delhi
          </Text>
        </View>

        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Secondary School(10th)</Text>
            <Text style={styles.itemDate}>May 2016</Text>
          </View>
          <Text style={styles.itemSubtitle}>S.D Public School CBSE Board</Text>
        </View>
      </View>

      {/* Personal Development & Workshops */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Personal Development & Workshops
        </Text>
        <Text style={styles.bullet}>
          • 10 days Theatre Workshop: Enhanced public speaking, confidence, and
          team collaboration
        </Text>
        <Text style={styles.bullet}>
          • SOL Workshop: Learned emotional balance, focus, and stress
          management techniques
        </Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
