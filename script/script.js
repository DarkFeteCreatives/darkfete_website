// Hamburger Menu Toggle for Mobile
document.querySelector('.navtogglemenu').addEventListener('click', function() {
    var navbarList = document.querySelector('.navbarList');
    if (navbarList.style.display === 'none' || navbarList.style.display === '') {
        navbarList.style.display = 'flex';
    } else {
        navbarList.style.display = 'none';
    }
});

function loadPDF(pdfPath) {
  // Remove 'active' class from all tabs
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Set the clicked tab as active
  document.querySelector(`[onclick="loadPDF('${pdfPath}')"]`).className += " active";

  // Load the PDF in the iframe
  document.getElementById('pdfViewer').src = pdfPath;
}







// Dropdown Menus Toggle
var menuTriggers = document.querySelectorAll('.navbarMenuTrigger');
for (var i = 0; i < menuTriggers.length; i++) {
    menuTriggers[i].addEventListener('click', function(event) {
        // Close any other open dropdowns
        var allDropdowns = document.querySelectorAll('.navbarDropdown');
        for (var j = 0; j < allDropdowns.length; j++) {
            if (allDropdowns[j] !== event.target.nextElementSibling) {
                allDropdowns[j].style.display = 'none';
            }
        }
        
        // Toggle the clicked dropdown
        var dropdown = event.target.nextElementSibling;
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
}

// Close dropdowns when clicked outside
document.addEventListener('click', function(event) {
    var isDropdownTrigger = event.target.matches('.navbarMenuTrigger');
    var isInDropdown = event.target.closest('.navbarDropdown');

    if (!isDropdownTrigger && !isInDropdown) {
        var dropdowns = document.querySelectorAll('.navbarDropdown');
        for (var k = 0; k < dropdowns.length; k++) {
            dropdowns[k].style.display = 'none';
        }
    }
});
