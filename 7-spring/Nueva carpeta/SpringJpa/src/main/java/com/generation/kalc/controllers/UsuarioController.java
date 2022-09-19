package com.generation.kalc.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.generation.kalc.models.UsuarioModels;
import com.generation.kalc.services.UsuarioServices;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
@Autowired
UsuarioServices usuarioservices;

@GetMapping()
public ArrayList<UsuarioModels> obtenerusuarios(){
    return usuarioservices.ObtenerUsuarios();
}
@PostMapping()
public UsuarioModels guardarUsuario(@RequestBody UsuarioModels usuario){
    return this.usuarioservices.guardarUsuario(usuario);
}

@GetMapping( path = "/{id}")
public Optional<UsuarioModels> obtenerUsuarioPorId(@PathVariable("id") Long id) {
    return this.usuarioservices.obtenerPorId(id);
}

@GetMapping("/query")
public ArrayList<UsuarioModels> obtenerUsuarioPorPrioridad(@RequestParam("prioridad") Integer prioridad){
    return this.usuarioservices.obtenerPorPrioridad(prioridad);
}

@DeleteMapping( path = "/{id}")
public String eliminarPorId(@PathVariable("id") Long id){
    boolean ok = this.usuarioservices.eliminarUsuario(id);
    if (ok){
        return "Se eliminó el usuario con id " + id;
    }else{
        return "No pudo eliminar el usuario con id" + id;
    }
}



}
