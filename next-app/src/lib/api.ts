/**
 * CMRE Decoupled API Client
 * This client handles connections to WordPress (CMS) and Django (Business Logic).
 */

export const API = {
    // WordPress Content API
    wordpress: {
        async getPrograms() {
            // In production, this would be a fetch to wp-json/wp/v2/loan-programs
            return [
                { id: 1, name: "No Income Verification", slug: "no-income-verification", type: "Non-QM" },
                { id: 2, name: "Hard Money Loans", slug: "hard-money", type: "Investor" },
            ];
        },
        async getLocations() {
            // wp-json/wp/v2/locations
            return ["Los Angeles", "New York", "Miami"];
        }
    },

    // Django Business Logic API
    django: {
        async calculateLoan(data: any) {
            // POST to django-api/calculate/
            return { status: "success", estimatedRate: "6.5%" };
        },
        async submitApplication(data: any) {
            // POST to django-api/applications/
            return { id: "APP-123", status: "submitted" };
        }
    }
};
