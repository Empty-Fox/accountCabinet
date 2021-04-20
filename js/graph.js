$(document).ready(function() {
    $.getJSON("testData.json", function(json) {
        
        
         var day1 = (new Date()).toLocaleDateString().split('T')[0];
         var day2 = new Date(new Date().setDate( new Date().getDate() - 1)).toLocaleDateString().split('T')[0];
         var day3 = new Date(new Date().setDate( new Date().getDate() - 2)).toLocaleDateString().split('T')[0];
         var day4 = new Date(new Date().setDate( new Date().getDate() - 3)).toLocaleDateString().split('T')[0];
         var day5 = new Date(new Date().setDate( new Date().getDate() - 4)).toLocaleDateString().split('T')[0];
         var day6 = new Date(new Date().setDate( new Date().getDate() - 5)).toLocaleDateString().split('T')[0];
         var day7 = new Date(new Date().setDate( new Date().getDate() - 6)).toLocaleDateString().split('T')[0];
         var day8 = new Date(new Date().setDate( new Date().getDate() - 7)).toLocaleDateString().split('T')[0];
         var day9 = new Date(new Date().setDate( new Date().getDate() - 8)).toLocaleDateString().split('T')[0];
         var day10 = new Date(new Date().setDate( new Date().getDate() - 9)).toLocaleDateString().split('T')[0];


         var revenue_RUB = JSON.parse(JSON.stringify(json[0].revenue_RUB));
         var revenue_USD = JSON.parse(JSON.stringify(json[0].revenue_USD));
         var revenue_EUR = JSON.parse(JSON.stringify(json[0].revenue_EUR));
         var revenue_UAH = JSON.parse(JSON.stringify(json[0].revenue_UAH));
         var clicks = JSON.parse(JSON.stringify(json[0].clicks));
         var conversions = JSON.parse(JSON.stringify(json[0].conversions));


         var myChart =  document.getElementById('myChart').getContext('2d');   
         
        
         
         Chart.defaults.font.size = 16;
var labels=[day10, day9, day8, day7, day6, day5, day4, day3, day2, day1];
         var massPopChart = new Chart(myChart, {
             type:'line',
             FontSize:24,
             data:{
                 labels:labels,                    
                 datasets:[                    
               
                {
                    label: 'Revenue (RUB)',
                    backgroundColor: '#3333ff',
                    borderColor: '#3333ff',
                    data: revenue_RUB,
                },
                {
                label: 'Revenue (USD)',
                backgroundColor: '#ff0055',
                borderColor: '#ff0055',                  
                data: revenue_USD,
            
                
            },
            {
                label: 'Revenue (EUR)',
                backgroundColor: '#7bcfdb',
                borderColor: '#7bcfdb',
                data: revenue_EUR,
                
                
            },
            {
                label: 'Revenue (UAH)',
                backgroundColor: '#cccc00',
                borderColor: '#cccc00',
                data: revenue_UAH,
            },
            {
                label: 'Clicks',
                backgroundColor: '#884dff',
                borderColor: '#884dff',
                data: clicks,
                
                
            },
            {
                label: 'Conversions',
                backgroundColor: '#80ff00',
                borderColor: '#80ff00',                  
                data: conversions,
            
                
            },
            
            ]
             },
            
                options: {     
                      
                    plugins: {
                        legend: {
                            position: 'bottom',
                            // labels: {                               
                            //     font: {
                            //         size: 18
                            //     }                               
                            // }                  
                        },
                        scales: {
                            x: {
                                type: 'time',
                                time: {
                                    unit: 'month'
                                }
                            }},
                        
                    }, 

                 
                 
                    interaction: {
                        intersect: false,
                        mode: 'index',
                        padding: 20,                     
                         
                      },

                    responsive: true,
                    maintainAspectRatio: false
                },

                responsive:true,
                maintainAspectRatio: false
         });

        
        });
       
    });
    