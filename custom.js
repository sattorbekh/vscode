document.addEventListener('DOMContentLoaded', function () {
    const observerConfig = { attributes: true }; // Observe style changes
    let blurElement = null; // Global reference for the blur element

    // Function to add the blur effect
    function runMyScript() {
        const targetDiv = document.querySelector(".monaco-workbench");

        // If blur element already exists, do nothing
        if (blurElement) return;

        // Create and configure the blur element
        blurElement = document.createElement("div");
        blurElement.setAttribute('id', 'command-blur');
        blurElement.style.position = 'fixed';
        blurElement.style.top = 0;
        blurElement.style.left = 0;
        blurElement.style.width = '100%';
        blurElement.style.height = '100%';
        blurElement.style.background = 'rgba(0, 0, 0, 0.15)';
        blurElement.style.backdropFilter = 'blur(8px)';
        blurElement.style.zIndex = '1000';

        // Add click event to remove blur
        blurElement.addEventListener('click', handleEscape);

        // Append the blur element
        targetDiv.appendChild(blurElement);
    }

    // Function to remove the blur effect
    function handleEscape() {
        if (blurElement) {
            blurElement.remove();
            blurElement = null; // Reset reference
        }
    }

    // Mutation Observer to track Command Palette visibility
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const commandDialog = mutation.target;
                if (commandDialog.style.display === 'none') {
                    handleEscape(); // Remove blur when Command Palette is hidden
                } else {
                    runMyScript(); // Add blur when Command Palette is shown
                }
            }
        });
    });

    // Check for the Command Palette element
    const checkElement = setInterval(() => {
        const commandDialog = document.querySelector(".quick-input-widget");
        if (commandDialog) {
            observer.observe(commandDialog, observerConfig);
            clearInterval(checkElement); // Stop interval once found
        }
    }, 500);

    // Add keyboard listener for Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            handleEscape();
        }
    });
});
