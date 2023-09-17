document.addEventListener('DOMContentLoaded', function() {
    var dropdownTriggers = document.querySelectorAll('nav li');
    for (var i = 0; i < dropdownTriggers.length; i++) {
        dropdownTriggers[i].addEventListener('click', function() {
            var dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                var isDisplayed = dropdown.style.display === 'block';
                dropdown.style.display = isDisplayed ? 'none' : 'block';
            }
        });
    }
});

document.querySelector('[data-toggle="collapseCommision"]').addEventListener('click', function() {
    const sectionsToToggle = ['commisionContent', 'roseFloat'];
    let areAllSectionsHidden = true;

    sectionsToToggle.forEach(sectionID => {
        var content = document.getElementById(sectionID);
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            content.style.opacity = '1';
            content.style.maxHeight = '1000px'; // adjust this value to fit your content
            areAllSectionsHidden = false;
        } else {
            content.style.display = 'none';
            content.style.opacity = '0';
            content.style.maxHeight = '0';
        }
    });
    
    if (areAllSectionsHidden) {
        this.classList.remove('expanded');
    } else {
        this.classList.add('expanded');
    }
});

document.querySelector('[data-toggle="aboutusToggle"]').addEventListener('click', function() {
    const aboutUsSections = ['aboutusContent', 'roseFloatAbout'];
    let areAllSectionsHidden = true;

    aboutUsSections.forEach(sectionID => {
        var content = document.getElementById(sectionID);
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            content.style.opacity = '1';
            content.style.maxHeight = '1000px';
            areAllSectionsHidden = false;
        } else {
            content.style.display = 'none';
            content.style.opacity = '0';
            content.style.maxHeight = '0';
        }
    });

    if (areAllSectionsHidden) {
        this.classList.remove('expanded');
    } else {
        this.classList.add('expanded');
    }
});

const express = require('express');
const app = express();

// Dummy data for example purposes
const data = [
    { id: 1, title: 'First post', content: 'This is the first post.' },
    { id: 2, title: 'Second post', content: 'This is the second post.' },
    // ... Add more sample posts
];

app.get('/search', (req, res) => {
    const query = req.query.query;
    
    // Here's a very basic search that just checks if the title or content includes the query
    // In a real-world scenario, you might use a database search or a dedicated search engine
    const results = data.filter(post => post.title.includes(query) || post.content.includes(query));

    res.send(results);  // Send results back to the frontend (you'd probably render a template in a real-world scenario)
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

console.log ('Script Launched')