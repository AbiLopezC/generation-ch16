package com.generation.kalc.services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.generation.kalc.models.UsuarioModels;
import com.generation.kalc.repositories.UsuarioRepositories;

@Service
public class UsuarioServices {
@Autowired

	UsuarioRepositories usuariorepositories;

public ArrayList <UsuarioModels> ObtenerUsuarios(){
	return (ArrayList<UsuarioModels>) usuariorepositories.findAll();

}

public UsuarioModels guardarUsuario(UsuarioModels usuario){
    return usuariorepositories.save(usuario);
}

public Optional<UsuarioModels> obtenerPorId(Long id){
    return usuariorepositories.findById(id);
}

public ArrayList<UsuarioModels>  obtenerPorPrioridad(Integer prioridad) {
    return usuariorepositories.findByPrioridad(prioridad);
}

public boolean eliminarUsuario(Long id) {
    try{
        usuariorepositories.deleteById(id);
        return true;
    }catch(Exception err){
        return false;
    }
}


}
