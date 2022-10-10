import React from "react";

const Login = () => {

 

    return (
        <div className="container position-absolute top-50 start-50 translate-middle">
              <div class="row">
                <div class="col-sm-6">
                    <h1>Recicla</h1>
                    <form>
                        <div class="sm-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="sm-3">
                            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                            <div id="emailHelp" class="form-text">¿Has olvidado la contraseña?</div>
                        </div>
                        <button type="submit" class="btn btn-primary">Ingresar</button>
                    </form>
                </div>
                <div class="col-sm-6">
                    <img className ="image-login" src="https://media.istockphoto.com/photos/recycling-symbol-on-grass-picture-id1325018993?b=1&k=20&m=1325018993&s=170667a&w=0&h=_r0hGFSSj1dj2ZRq17B3DCnLiA_0pOuWOlmpwZDzH-Y=" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Login;