package com.kalc.excepcion;

public class ErrorFisicoException extends Exception{
    public ErrorFisicoException(Exception ex){
        super("\t\t\t  ocurrio un error fisico -", ex);

    }



}
