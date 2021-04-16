import $ from 'jquery'
import noUiSlider from 'nouislider'
window.jQuery = $
window.$ = $
require('/app/js/vendor/NiceSelect/jquery.nice-select.min')
require('/app/js/vendor/NiceScroll/jquery.nicescroll.min')


document.addEventListener('DOMContentLoaded', () => {

    // Select end Scroll

    $('.form__select').niceSelect();
    $('.form__select .list').niceScroll({
        cursorcolor: '#3e9cdc',
        background: '#3d4050',
        cursorwidth: '7px',
        cursorborder: 'none',
        cursorborderradius: '3px',
    })
    $('.form__select .list .option').eq(0).remove()

    // Range slider

    const rangeSlider = document.querySelector('#form__range-1')
    noUiSlider.create(rangeSlider, {
        start: 75,
        connect: 'lower',
        step: 1,
        range: {
            'min': 0,
            'max': 100
        }
    })

    const input = document.querySelector('#form__range-input')
    const viewValue = document.querySelector('.form__range-fake-input')
    rangeSlider.noUiSlider.on('update', function (values) {
        input.value = Math.round(values)
        viewValue.innerHTML = `${Math.round(values)} %`
    })

    // Mobile menu

    $('.menu-mobile__button').on('click', function (){
        $('.menu-mobile').slideToggle('fast')
    })
})
