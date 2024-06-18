import Database from 'better-sqlite3'
const db = new Database('mydb.db')
export async function load() {
    const {value} = db.prepare("SELECT value FROM variables WHERE variable = ?").get('counter')
    db.prepare("UPDATE variables SET value = ? WHERE variable = ?").run(Number(value) + 1, 'counter')
	return { x: Number(value) + 1 }
}