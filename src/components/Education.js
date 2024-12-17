import React from 'react';

function Education() {
    return (
        <section className="education-section" id="education">
            <h1>Education</h1>
            <div class="education-container">
                <div class="education-box">
                    <img src="%PUBLIC_URL%bachelors-image.png" alt="Bachelor's in Electrical & Electronics Engineering" />
                </div>
                <div class="education-box">
                    <img src="%PUBLIC_URL%/images/postgraduate-quality-engineering-image.png" alt="Post-Graduation in Quality Engineering Management" />
                </div>
                <div class="education-box">
                    <img src="%PUBLIC_URL%/images/postgraduate-web-development-image.png" alt="Post-Graduation in Web Development" />
                </div>
            </div>
        </section>
    );
}

export default Education;
