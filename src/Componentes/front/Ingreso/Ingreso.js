import React from 'react'

const Ingreso = () => {
  return (
    
    <div>
            <form class="form">
                <h2 class="form_title">Inicia Sesion</h2>

                <div class="form_container">
                   
                    <div class="form_group">
                        <input type="email" name="correo" class="form_input" placeholder=" " />
                        <label for="correo" class="form_label">Correo</label>
                        <span class="form_line"></span>
                    </div>


                    <div class="form_group">
                        <input type="password" name="contrasena" class="form_input" placeholder=" " />
                        <label for="password" class="form_label">Contraseña</label>
                        <span class="form_line"></span>
                    </div>



                    <input type="submit" class="form_submit " value="Ingresar" />



                </div>
            </form>

        </div>


  )
}

export default Ingreso