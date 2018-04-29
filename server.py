#!flask/bin/python
from flask import Flask
from flask import Response
import pandas as pd
#another csv is data_coords.csv
#                data_colors.csv
data = pd.read_csv('data_colors_final.csv',index_col='inicio', parse_dates=['inicio','fin'])



app = Flask(__name__)
@app.route('/')
def index():
    message = "Hello World!"
    resp = Response(message)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
@app.route('/viajes/<fecha>')
def get_viajes(fecha):
    #Get just the day to iterate on less entries
    dia = fecha.split('_')[0]
    #Replace date to a known format
    fecha = fecha.replace('_', ' ')
    #Get the data from a given day
    datos_dia = data[dia]
    #See the actual active trips on a given date
    viajes = datos_dia[(fecha >= datos_dia.index) & (fecha <= datos_dia.fin)]
    #Reset the index otherwise 'inicio' wont appear
    viajes = viajes.reset_index()
    #Dropping inicio and fin since client side already knows the time
    viajes = viajes.drop(['inicio','fin'], axis=1)
    #JSON String
    json = viajes.to_json(orient='records')

    #Needed... i think
    resp = Response(json)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    #Return the json
    return resp

if __name__ == '__main__':
    app.jinja_env.cache = {}
    app.run(debug=True)
