export const validarDecimalPunto = valor => {
	// Elimina caracteres no válidos (excepto números, punto decimal)
	valor = valor.replace(/[^0-9.]/g, '')
	if (valor.length === 1 && valor === '.') {
		valor = '0.'
	}
	// Asegura que solo haya un punto decimal en la entrada
	const decimalCount = valor.split('.').length - 1
	if (decimalCount > 1) {
		valor = valor.slice(0, valor.lastIndexOf('.'))
	}
	return valor
}
