        // Component Loader for Modular HTML Architecture
        class ComponentLoader {
            constructor() {
                this.components = [
                    'components/header.html',
                    'components/hero.html', 
                    'components/profile.html',
                    'components/cards/module1.html',
                    'components/cards/module2.html',
                    'components/cards/js-projects.html',
                    'components/footer.html'
                ];
            }

            async loadComponent(url) {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Failed to load ${url}: ${response.status}`);
                    }
                    return await response.text();
                } catch (error) {
                    console.error('Component loading error:', error);
                    return `<div class="alert alert-danger" role="alert">
                        Error loading component: ${url}
                    </div>`;
                }
            }

            async loadAllComponents() {
                const container = document.getElementById('app');
                if (!container) {
                    console.error('Container element with id "app" not found');
                    return;
                }

                // Show loading state
                container.innerHTML = '<div class="text-center py-5"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';

                try {
                    // Load components in order
                    for (const componentUrl of this.components) {
                        const componentHtml = await this.loadComponent(componentUrl);
                        container.insertAdjacentHTML('beforeend', componentHtml);
                    }
                } catch (error) {
                    console.error('Error loading components:', error);
                    container.innerHTML = `<div class="alert alert-danger" role="alert">
                        Failed to load components. Please refresh the page.
                    </div>`;
                }
            }
        }

        // Initialize component loader when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            const loader = new ComponentLoader();
            loader.loadAllComponents();
        });
