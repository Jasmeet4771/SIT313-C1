import { useState } from "react";

function Newsletter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setEmail("");
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong.");
        }
    };

    return (
        <section className="newsletter">

            <div className="newsletter-content">
                <h2>SIGN UP FOR OUR DAILY INSIDER</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <button type="submit">
                        Subscribe
                    </button>
                </form>
            </div>

            {message && (
                <p className="newsletter-message">
                    {message}
                </p>
            )}

        </section>
    );
}

export default Newsletter;