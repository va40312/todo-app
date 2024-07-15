class AuthStorage {
  storageName = "auth"

  getData() {
    let data = localStorage.getItem(this.storageName)
    if (data === null) return null

    let result = JSON.parse(data)
    return result
  }

  setData(data) {
    let json = JSON.stringify(data)
    localStorage.setItem(this.storageName, json)
  }
}

export default new AuthStorage()