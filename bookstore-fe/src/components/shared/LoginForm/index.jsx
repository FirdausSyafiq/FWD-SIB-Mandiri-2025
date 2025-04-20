import React from 'react';

const LoginForm = () => {
    const styles = {
        formContainer: {
            maxWidth: '400px',
            margin: '50px auto',
            padding: '30px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
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
            marginBottom: '16px',
            fontSize: '14px',
        },
        checkboxContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
        },
        submitButton: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
        },
        link: {
            color: '#007bff',
            textDecoration: 'none',
            fontSize: '14px',
        }
    };

    return (
        <form style={styles.formContainer}>
            <h2 style={styles.heading}>Login</h2>

            <div>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    style={styles.input}
                />
            </div>

            <div>
                <label htmlFor="password" style={styles.label}>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Enter your password"
                    style={styles.input}
                />
            </div>

            <div style={styles.checkboxContainer}>
                <label>
                    <input type="checkbox" /> Remember me
                </label>
                <a href="#" style={styles.link}>Forgot password?</a>
            </div>

            <button type="submit" style={styles.submitButton}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;
