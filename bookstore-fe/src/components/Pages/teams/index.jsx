import React from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

export default function Teams() {
    const styles = {
        pageContainer: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // This ensures the container takes at least the full viewport height
        },
        mainContent: {
            flex: '1', // This will make the content area expand to fill available space
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '40px',
            color: '#333',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '20px',
        },
        avatar: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '15px',
        },
        name: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#222',
        },
        role: {
            fontSize: '14px',
            color: '#666',
        }
    };

    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Project Manager",
            photo: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "David Kim",
            role: "Frontend Developer",
            photo: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            name: "Emily Chen",
            role: "UI/UX Designer",
            photo: "https://randomuser.me/api/portraits/women/46.jpg"
        },
        {
            name: "Michael Smith",
            role: "Backend Developer",
            photo: "https://randomuser.me/api/portraits/men/47.jpg"
        }
    ];

    return (
        <div style={styles.pageContainer}>
            <Header />
            <div style={styles.mainContent}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Meet Our Team</h1>
                    <div style={styles.grid}>
                        {teamMembers.map((member, index) => (
                            <div key={index} style={styles.card}>
                                <img src={member.photo} alt={member.name} style={styles.avatar} />
                                <div style={styles.name}>{member.name}</div>
                                <div style={styles.role}>{member.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}