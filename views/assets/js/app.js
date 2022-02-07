const txtURL = document.querySelector('#txtURL')
const btnFetch = document.querySelector('#btnFetch')
const btnReset = document.querySelector('#btnReset')
const dvAlert = document.querySelector('#dvAlert')
const dvResponse = document.querySelector('#dvResponse')
const cdResponse = document.querySelector('#cdResponse')
const spStatus = document.querySelector('#spStatus')

const URL = '/api/values/'
const REMOTE_API = txtURL.value

btnFetch.addEventListener('click', async () => {
    try {
        if (!txtURL.value || txtURL.value.trim() === '') {
            txtURL.value = REMOTE_API
        }

        dvAlert.removeAttribute('hidden')

        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: txtURL.value })
        })
        const data = await response.json()

        cdResponse.innerHTML = JSON.stringify(data, null, 4)
        spStatus.innerHTML = `Response: [${response.status}] ${response.statusText}`
    } catch (error) {
        spStatus.innerHTML = `Error Occurred: ${error && error.message && error.message || 'Something went wrong'}`
    } finally {
        dvResponse.removeAttribute('hidden')
        dvAlert.setAttribute('hidden', '')
    }
})
btnReset.addEventListener('click', () => {
    dvResponse.setAttribute('hidden', '')
    cdResponse.innerHTML = ''
    spStatus.innerHTML = ''
    txtURL.value = REMOTE_API
})
txtURL.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnFetch.click();
    }
})