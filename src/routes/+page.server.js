var x = 1
export async function load() {
	return { x: x++ }
}