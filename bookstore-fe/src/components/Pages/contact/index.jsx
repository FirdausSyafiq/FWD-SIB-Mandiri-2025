import React from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

export default function Contact() {
    const styles = {
        pageWrapper: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif',
        },
        contentWrapper: {
            flex: 1,
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 20px',
        },
        title: {
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#333',
        },
        formGroup: {
            marginBottom: '20px',
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#444',
        },
        input: {
            width: '100%',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '14px',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '14px',
            minHeight: '120px',
        },
        submitButton: {
            padding: '12px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
        },
        infoSection: {
            marginTop: '40px',
            textAlign: 'center',
            color: '#555',
        },
        infoItem: {
            marginBottom: '10px',
        }
    };

    return (
        <div style={styles.pageWrapper}>
            <Header />
            <div style={styles.contentWrapper}>
                <h1 style={styles.title}>Contact Us</h1>
                <form>
                    <div style={styles.formGroup}>
                        <label htmlFor="name" style={styles.label}>Your Name</label>
                        <input type="text" id="name" name="name" required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>Email Address</label>
                        <input type="email" id="email" name="email" required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="message" style={styles.label}>Message</label>
                        <textarea id="message" name="message" required style={styles.textarea}></textarea>
                    </div>
                    <button type="submit" style={styles.submitButton}>Send Message</button>
                </form>

                <div style={styles.infoSection}>
                    <p style={styles.infoItem}>📞 Phone: +62 812-3456-7890</p>
                    <p style={styles.infoItem}>📧 Email: support@bookstore.com</p>
                    <p style={styles.infoItem}>📍 Address: Jl. Sudirman No.123, Jakarta, Indonesia</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
