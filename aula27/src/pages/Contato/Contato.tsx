import contato from '../../assets/img/contato.png'
const Contato = () => {
  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <div className="grid grid-cols-1 gap-6">
          
            <h2 className="text-2xl font-semibold mb-2">Contato</h2>

            <img src={ contato } />

          
        </div>
      </main>
    </>
  );
};
export default Contato;
