#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Apr 26 15:54:38 2018

@author: Quirino
"""
import numpy as np
import pandas as pd
def map_color(y,x):
    '''Map value to a color'''
    colors = []
    #Longitud
    for i in range(len(y)):
        latitud = y[i]
        longitud = x[i]
        
        #Zapopan
        if (longitud >= -103.403155 and longitud  <= -103.375371) and \
           (latitud <= 20.738794 and latitud >= 20.712981): colors.append('orange')
        #Zapopan-Sur Glorieta
        elif (longitud  >= -103.414794 and longitud  <= -103.382751) and \
             (latitud <= 20.676887 and latitud >= 20.645323): colors.append('black')
        # GDL Centro
        elif (longitud >= -103.387263 and longitud <= -103.331220) and \
             (latitud <= 20.702046 and latitud >= 20.665767): colors.append('red')
        # CUCEI
        elif (longitud >= -103.335182 and longitud <= -103.298654) and \
             (latitud <= 20.667121 and latitud >= 20.634259) : colors.append('blue')
        else: print(x[i],y[i]); break
    return colors

df = pd.read_csv('data_coords.csv')
df.set_index('inicio', inplace=True)

y = np.array(df.latitude_destino)
x = np.array(df.longitude_destino)

colors = map_color(y,x)



