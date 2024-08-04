export const FormatValue = (value: number) => (
    // Api de internacionalização do javasctipt para frmatar valores
    new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
)