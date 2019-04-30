export default (s): string => {
    return s
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase()
        .substring(0, 100)
}
