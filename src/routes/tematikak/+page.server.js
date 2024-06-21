import { db } from '$lib/db'
import {store} from '$lib/store'
export async function load(event) {
    var c = await db.getall("SELECT * FROM tematika Order By subject")
	return { c }
}