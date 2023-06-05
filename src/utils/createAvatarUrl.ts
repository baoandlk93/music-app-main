export const color = [
    '0D8ABC',
    'd35300',
    '12a480',
    '7E57C2',
    'F18902',
    '174207',
    '008080',
    '452e52'
]
function randomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
const createAvatarUrl = (name: string) => {
    return `https://ui-avatars.com/api/?background=${color[randomInt(0, color.length)]}&color=fff&name=${name}`
}

export default createAvatarUrl