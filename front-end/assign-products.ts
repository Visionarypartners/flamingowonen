import fetch from "node-fetch"

// const BASE_URL = "https://api.flamingowonen.nl/medusa"
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3Rvcl9pZCI6InVzZXJfMDFKUUhEWDNSOUZFU040RE1QR0hIUkVKWFMiLCJhY3Rvcl90eXBlIjoidXNlciIsImF1dGhfaWRlbnRpdHlfaWQiOiJhdXRoaWRfMDFKUUhEWDNXWDBGS0RTRUFUTjA4UFNaRzEiLCJhcHBfbWV0YWRhdGEiOnsidXNlcl9pZCI6InVzZXJfMDFKUUhEWDNSOUZFU040RE1QR0hIUkVKWFMifSwiaWF0IjoxNzQzNTUxMjExLCJleHAiOjE3NDM2Mzc2MTF9.8ChBWwAyF9oE7jMxHPcCCKpAB6NPF2q2BHyaqjp2hQw"
const SALES_CHANNEL_ID = "sc_01JQH92XKT2PAGMWZPAPDNAFWT"
const CATEGORY_ID = "pcat_01JQJ6C543QAP6V0G3KEA9AQJG"

async function run() {
    try {
        const productsRes = await fetch(`https://api.flamingowonen.nl/medusa/admin/products?limit=2000`, {
            headers: {
                Authorization: TOKEN,
                "Content-Type": "application/json",
            },
        })

        if (!productsRes.ok) {
            const err = await productsRes.text()
            throw new Error("Fout bij ophalen producten: " + err)
        }

        const productsData = await productsRes.json()
        const products = productsData.products

        if (!Array.isArray(products)) {
            throw new Error("Product response is niet in de juiste vorm.")
        }

        console.log(`🔍 ${products.length} producten gevonden.`)

        for (const product of products) {
            const pid = product.id

            // 📦 Voeg toe aan sales channel
            const scRes = await fetch(`https://api.flamingowonen.nl/medusa/admin/sales-channels/${SALES_CHANNEL_ID}/products`, {
                method: "POST",
                headers: {
                    Authorization: TOKEN,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    add: [pid],
                }),
            });

            if (!scRes.ok) {
                const err = await scRes.text()
                console.warn(`⚠️ SalesChannel fout bij ${product.title}: ${err}`)
            }

            // 🗂️ Voeg toe aan categorie
            const catRes = await fetch(`https://api.flamingowonen.nl/medusa/admin/product-categories/${CATEGORY_ID}/products`, {
                method: "POST",
                headers: {
                    Authorization: TOKEN,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    add: [pid],
                }),
            })

            if (!catRes.ok) {
                const err = await catRes.text()
                console.warn(`⚠️ Category fout bij ${product.title}: ${err}`)
            }

            if (scRes.ok && catRes.ok) {
                console.log(`✅ ${product.title} toegevoegd aan kanaal + categorie`)
            }
        }

        console.log("🎉 Alles klaar!")
    } catch (err) {
        console.error("❌ Er ging iets mis:", err)
    }
}

run()
