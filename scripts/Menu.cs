
using UnityEngine;
using System.Collections;
using System;

public class Menu : MonoBehaviour {

    bool estaVisivel = false;

    // Use this for initialization
    void Start () {

       

    }

    // Update is called once per frame
    void Update()
    {
     
        if (Input.GetKeyDown(KeyCode.P) && (estaVisivel == false))
        {
            estaVisivel = true;
        }
        if (Input.GetKeyDown(KeyCode.Escape) && (estaVisivel == true))
        {
            estaVisivel = false;

        }
    }
    //a classe que vai desenhar interface gráfica
    Boolean OnGUI() {
        if (estaVisivel)
        {
            if (GUI.Button(new Rect(250, 180, 80, 60), "Novo"))
            {
                
                print("Você apertou o botão");
                Application.LoadLevel(0);

                
            }
            else if (GUI.Button(new Rect(500, 180, 90, 60), "Proximo nível"))
            {
                
                print("Você apertou o botão");
                Application.LoadLevel(1);

                
			}
            
		}
        return estaVisivel;
    }
      
    private Rect newRect(int v1, int v2, int v3, int v4, string v5)
    {
        throw new NotImplementedException();
    }
}
