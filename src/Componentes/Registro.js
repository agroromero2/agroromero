import React from 'react'

function Registro() {
    return (
        <div>
            <form class="form">
                <h2 class="form_title">Registro</h2>

                <div class="form_container">

                <div class="form_group">
                    <input type="text" name="name" class="form_input" placeholder=" "  />
                    <label for="name" class="form_label">Nombre</label>
                    <span class="form_line"></span>
                </div>


                <div class="form_group">
                    <input type="email" name="correo" class="form_input" placeholder=" "  />
                    <label for="name" class="form_label">Correo</label>
                    <span class="form_line"></span>
                </div>


                <div class="form_group">
                    <input type="numerico" name="cedula" class="form_input" placeholder=" " />
                    <label for="name" class="form_label">Cedula</label>
                    <span class="form_line"></span>
                </div>


                <div class="form_group">
                    <input type="password" name="contrasena" class="form_input" placeholder=" " />
                    <label for="name" class="form_label">Contraseña</label>
                    <span class="form_line"></span>
                </div>


                <div class="form_group">
                    <input type="password" name="contrasena_comfirm" class="form_input" placeholder=" "  />
                    <label for="name" class="form_label">Confirme Contraseña</label>
                    <span class="form_line"></span>
                </div>



                <input type="submit" class="form_submit " value="Registro" />


                </div>
            </form>


        </div>
    )
}

export default Registro